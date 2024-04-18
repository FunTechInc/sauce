/** set focus to `focusTarget` */
export const FocusTrap = ({
   focusTarget,
}: {
   focusTarget: React.RefObject<HTMLElement>;
}) => {
   return (
      <div
         onFocus={() => focusTarget.current?.focus()}
         tabIndex={0}
         style={{
            opacity: 0,
            width: 0,
            height: 0,
         }}></div>
   );
};
