import { MouseEventHandler, ReactElement } from "react";
import { Button } from "@/components/ui/button";

type Props = {
  rowContent?: ReactElement;
  onPrevClick?: MouseEventHandler<HTMLButtonElement>;
  onNextClick?: MouseEventHandler<HTMLButtonElement>;
  prevDisabled?: boolean;
  nextDisabled?: boolean;
};

export default function PaginationCard({
  rowContent,
  onPrevClick,
  onNextClick,
  prevDisabled,
  nextDisabled,
}: Props) {
  return (
    <div className="flex items-center justify-end space-x-2 py-4">
      {rowContent && (
        <div className="flex-1 text-sm text-muted-foreground">{rowContent}</div>
      )}
      <div className="space-x-2">
        <Button
          variant="outline"
          size="sm"
          onClick={onPrevClick}
          disabled={prevDisabled}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={onNextClick}
          disabled={nextDisabled}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
