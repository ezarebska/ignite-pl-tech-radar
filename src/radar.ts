import * as d3 from "d3";
import { RandomGenerator } from "./random-generator";
import { Point, Polar, QuadrantCoords, RingCoords } from "./coords";
import { Dot } from "./dot";
import { DotPositioner } from "./dot-positioner";
import { RadarConfig } from "./radar-config";

type SegmentedDots = Array<Array<Dot[]>>;

const createSegmentedArray = (): SegmentedDots => {
  const dotsArr = () => [] as Dot[];

  return [
    [dotsArr(), dotsArr(), dotsArr(), dotsArr()],
    [dotsArr(), dotsArr(), dotsArr(), dotsArr()],
    [dotsArr(), dotsArr(), dotsArr(), dotsArr()],
    [dotsArr(), dotsArr(), dotsArr(), dotsArr()],
  ];
};

function translate(x, y) {
  return "translate(" + x + "," + y + ")";
}

export class Radar {
  readonly randomGen = new RandomGenerator();
  readonly quadrants: QuadrantCoords[] = [
    { radial_min: 0, radial_max: 0.5, factor_x: 1, factor_y: 1 },
    { radial_min: 0.5, radial_max: 1, factor_x: -1, factor_y: 1 },
    { radial_min: -1, radial_max: -0.5, factor_x: -1, factor_y: -1 },
    { radial_min: -0.5, radial_max: 0, factor_x: 1, factor_y: -1 },
  ];
  readonly rings: RingCoords[] = [
    { radius: 130 },
    { radius: 220 },
    { radius: 310 },
    { radius: 400 },
  ];

  dots: Dot[];
  eventHandlers = {
    onDotMouseOver: (dot: Dot) => {},
    onDotMouseOut: (dot: Dot) => {},
  };

  constructor(private config: RadarConfig) {
    this.createDots();
  }

  createDots() {
    this.dots = this.config.entries.map((entryItem) => {
      const dot = new Dot(entryItem);

      dot.segment = new DotPositioner(
        this.quadrants,
        this.rings,
        entryItem.quadrant,
        entryItem.ring
      );
      dot.color = entryItem.active
        ? this.config.rings[entryItem.ring].color
        : this.config.colors.inactive;

      const position = dot.segment.random();
      dot.x = position.x;
      dot.y = position.y;

      return dot;
    });
  }

  setDotsLabels(segments: SegmentedDots) {
    let id = 1;
    const quadrantsOrdered = [2, 3, 1, 0];

    quadrantsOrdered.forEach((quadrant) => {
      for (let ring = 0; ring < 4; ring++) {
        const dotsInSegment = segments[quadrant][ring];

        dotsInSegment.sort(function (a, b) {
          return a.label.localeCompare(b.label);
        });

        dotsInSegment.forEach((dot) => {
          dot.id = `${id++}`;
        });
      }
    });
  }

  getQuadrantViewbox = (quadrant: number) => {
    return [
      Math.max(0, this.quadrants[quadrant].factor_x * 400) - 420,
      Math.max(0, this.quadrants[quadrant].factor_y * 400) - 420,
      440,
      440,
    ].join(" ");
  };

  createRootElement() {
    return d3
      .select("svg#" + this.config.svg_id)
      .style("background-color", this.config.colors.background)
      .attr("width", this.config.width)
      .attr("height", this.config.height);
  }

  createGrid(radarEl: d3.Selection<SVGElement, unknown, HTMLElement, any>) {
    const gridGroup = radarEl.append("g");

    const verticalLine = gridGroup
      .append("line")
      .attr("x1", 0)
      .attr("y1", -400)
      .attr("x2", 0)
      .attr("y2", 400)
      .style("stroke", this.config.colors.grid)
      .style("stroke-width", 1);

    const horizonalLine = gridGroup
      .append("line")
      .attr("x1", -400)
      .attr("y1", 0)
      .attr("x2", 400)
      .attr("y2", 0)
      .style("stroke", this.config.colors.grid)
      .style("stroke-width", 1);

    return {
      gridGroup,
      horizonalLine,
      verticalLine,
    };
  }

  drawRings(gridGroup: d3.Selection<SVGElement, unknown, HTMLElement, any>) {
    this.rings.forEach((ring, index) => {
      gridGroup
        .append("circle")
        .attr("cx", 0)
        .attr("cy", 0)
        .attr("r", ring.radius)
        .style("fill", "none")
        .style("stroke", this.config.colors.grid)
        .style("stroke-width", 1);

      gridGroup
        .append("text")
        .text(this.config.rings[index].name) // todo - move ring name to RingCoords and change it to generic Ring
        .attr("y", -ring.radius + 62)
        .attr("text-anchor", "middle")
        .style("fill", "#CECFD2")
        .style("font-size", "42px")
        .style("opacity", "0.5")
        .style("font-weight", "700")
        .style("pointer-events", "none")
        .style("user-select", "none");
    });
  }

  render() {
    const segments = createSegmentedArray();

    this.dots.forEach((dot, i) => {
      segments[dot.quadrant][dot.ring].push(dot);
    });

    this.setDotsLabels(segments);

    const rootSvgElement = this.createRootElement();
    const radarGroup = rootSvgElement.append("g");

    if ("zoomed_quadrant" in this.config) {
      rootSvgElement.attr(
        "viewBox",
        this.getQuadrantViewbox(this.config.zoomed_quadrant)
      );
    } else {
      radarGroup.attr(
        "transform",
        translate(this.config.width / 2, this.config.height / 2)
      );
    }

    const { gridGroup, horizonalLine, verticalLine } =
      this.createGrid(radarGroup);

    this.drawRings(gridGroup);

    // layer for entries
    var rink = radarGroup.append("g").attr("id", "rink");

    // rollover bubble (on top of everything else)
    var bubble = radarGroup
      .append("g")
      .attr("id", "bubble")
      .attr("x", 0)
      .attr("y", 0)
      .style("opacity", 0)
      .style("pointer-events", "none")
      .style("user-select", "none");
    bubble.append("rect").attr("rx", 4).attr("ry", 4).style("fill", "#676A6E");
    bubble.append("text").style("font-size", "10px").style("fill", "#F0EEEA");
    bubble
      .append("path")
      .attr("d", "M 0,0 10,0 5,8 z")
      .style("fill", "#676A6E");

    const showBubble = (d) => {
      const tooltip = d3.select("#bubble text").text(d.label);
      const bbox = (tooltip.node() as SVGGraphicsElement).getBBox();

      d3.select("#bubble")
        .attr("transform", translate(d.x - bbox.width / 2, d.y - 16))
        .style("opacity", 0.8);
      d3.select("#bubble rect")
        .attr("x", -5)
        .attr("y", -bbox.height)
        .attr("width", bbox.width + 10)
        .attr("height", bbox.height + 4);
      d3.select("#bubble path").attr(
        "transform",
        translate(bbox.width / 2 - 5, 3)
      );
    };

    function hideBubble(d) {
      d3.select("#bubble")
        .attr("transform", translate(0, 0))
        .style("opacity", 0);
    }

    // draw blips on radar
    const blips = rink
      .selectAll(".blip")
      .data(this.dots)
      .enter()
      .append("g")
      .attr("class", "blip")
      // todo - run events
      .on("mouseover", (dot: Dot) => {
        this.eventHandlers.onDotMouseOver(dot);
        showBubble(dot);
      })
      .on("mouseout", (dot: Dot) => {
        hideBubble(dot);
        this.eventHandlers.onDotMouseOut(dot);
      });

    const config = this.config;

    // this.configure each blip
    blips.each((dot, index, blipsArr) => {
      const blipElement = blipsArr[index];
      let blip: d3.Selection<
        SVGElement | HTMLAnchorElement,
        unknown,
        null,
        undefined
      > = d3.select(blipElement);

      if (dot.active && dot.hasOwnProperty("link")) {
        blip = blip
          .append("a")
          .attr("xlink:href", dot.link)
          .attr("target", "_blank");
      }

      // blip shape
      if (dot.moved > 0) {
        blip
          .append("path")
          .attr("d", "M -11,5 11,5 0,-13 z") // triangle pointing up
          .style("fill", dot.color);
      } else if (dot.moved < 0) {
        blip
          .append("path")
          .attr("d", "M -11,-5 11,-5 0,13 z") // triangle pointing down
          .style("fill", dot.color);
      } else {
        blip.append("circle").attr("r", 9).attr("fill", dot.color);
      }

      if (dot.active) {
        const blip_text = dot.getLabelFirstLetter();

        blip
          .append("text")
          .text(blip_text[0])
          .attr("y", 3)
          .attr("text-anchor", "middle")
          .style("fill", config.rings[dot.ring].textColor)
          .style("font-size", function (d) {
            return blip_text.length > 2 ? "9px" : "11px";
          })
          .style("pointer-events", "none")
          .style("user-select", "none");
      }
    });

    // make sure that blips stay inside their segment
    function ticked() {
      blips.attr("transform", function (d) {
        return translate(d.segment.clipX(d), d.segment.clipY(d));
      });
    }

    // distribute blips, while avoiding collisions
    d3.forceSimulation()
      .nodes(this.dots)
      .velocityDecay(0.19) // magic number (found by experimentation)
      .force("collision", d3.forceCollide().radius(12).strength(0.85))
      .on("tick", ticked);
  }

  onDotMouseOver(callback: (dot: Dot) => void) {
    this.eventHandlers.onDotMouseOver = callback;

    return this;
  }
  onDotMouseOut(callback: (dot: Dot) => void) {
    this.eventHandlers.onDotMouseOut = callback;

    return this;
  }
}
