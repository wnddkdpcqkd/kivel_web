import { colors } from "@components/color";
import { AddIcon, SubIcon } from "@components/svg";

export default function ZoomController({ onClickAdd, onClickSub }: { onClickAdd(): void; onClickSub(): void }) {
  return (
    <div className="py-3 px-2 rounded-[50px] bg-white shadow-lg items-center">
      <div id="mapZoomIn" className="active:scale-90 " onClick={onClickAdd}>
        <AddIcon width={24} height={24} color={colors.gray[90]} />
      </div>

      <div className="h-0.5 bg-gray-30 my-2.5" />

      <div id="mapZoomOut" className="active:scale-90" onClick={onClickSub}>
        <SubIcon width={24} height={24} color={colors.gray[90]} />
      </div>
    </div>
  );
}
