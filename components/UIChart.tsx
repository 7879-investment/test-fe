import {
  AreaStyleOptions,
  ChartOptions,
  createChart,
  DeepPartial,
  SeriesOptionsCommon,
} from "lightweight-charts";
import React from "react";
import { IPortfolio } from "./types";
import { UIPrice } from "./UIPrice";
import { RealtimeContext } from "./UIRealtimeContext";
import { usePortfolio } from "./usePortfolio";

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
      visible: false,
    },
    vertLines: {
      color: "#ffffff",
      visible: false,
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

export const UIChart = (props: { portfolio: IPortfolio }) => {
  const chartRef = React.useRef<any>();

  const chartData = React.useMemo(
    () =>
      props.portfolio.history.map((i) => ({
        time: i.date,
        value: i.totalValue.amount,
      })),
    [props.portfolio]
  );

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
  }, [chartData]);

  const portfolioData = usePortfolio(props.portfolio);

  return (
    <div className="bg-[#326985]">
      <div className=" text-white px-12 py-12 flex justify-between border-b border-white flex-col sm:flex-row">
        <span className="text-2xl">Your portfolio</span>
        <div className="flex flex-col sm:items-end">
          <span className="text-2xl">
            £ {portfolioData.totalValue.toFixed(2)}
          </span>
          <span className="text-xs">£ {portfolioData.diff.toFixed(2)}</span>
        </div>
      </div>
      <div ref={chartRef} />
    </div>
  );
};

export default UIChart;
