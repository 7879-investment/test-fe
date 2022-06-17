import {
  AreaStyleOptions,
  ChartOptions,
  createChart,
  DeepPartial,
  IChartApi,
  SeriesOptionsCommon,
} from "lightweight-charts";
import React from "react";
import { chartData } from "./data";

const chartOptions: DeepPartial<ChartOptions> = {
  height: 400,
  rightPriceScale: {
    scaleMargins: {
      top: 0.2,
      bottom: 0.2,
    },
    borderVisible: false,
  },
  timeScale: {
    borderVisible: false,
  },
  layout: {
    backgroundColor: "#326985",
    textColor: "#ffffff",
  },
  grid: {
    horzLines: {
      color: "#eee",
    },
    vertLines: {
      color: "#ffffff",
    },
  },
  crosshair: {
    vertLine: {
      labelVisible: false,
    },
  },
};

const seriesOptions: DeepPartial<AreaStyleOptions & SeriesOptionsCommon> = {
  topColor: "rgba(125, 162, 181, 0.7)",
  bottomColor: "rgba(125, 162, 181, 0.7)",
  lineColor: "rgba(125, 162, 181, 0.7)",
  lineWidth: 2,
};

export const UIChart = () => {
  const chartRef = React.useRef<any>();
  React.useEffect(() => {
    const handleResize = () => {
      chart.applyOptions({ width: chartRef.current.clientWidth });
      chart.timeScale().fitContent();
    };

    const chart = createChart(chartRef.current, {
      ...chartOptions,
      width: chartRef.current.clientWidth,
    });
    chart.timeScale().fitContent();

    const newSeries = chart.addAreaSeries(seriesOptions);
    newSeries.setData(chartData);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);

      chart.remove();
    };
  }, []);

  return <div ref={chartRef} />;
};

export default UIChart;
