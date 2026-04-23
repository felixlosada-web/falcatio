export default function AbstractBlock({ height = "h-[35vh]" }: { height?: string }) {
  return (
    <div className={`w-full ${height} bg-negro mt-32`}></div>
  );
}
