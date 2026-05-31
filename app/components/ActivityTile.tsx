export default function ActivityTile() {
  return (
    <section className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
      <h2 className="mb-4 font-semibold">
        Activity
      </h2>

      <div className="flex items-end gap-2 h-32">
        <div className="h-12 w-4 rounded bg-purple-500" />
        <div className="h-20 w-4 rounded bg-purple-500" />
        <div className="h-8 w-4 rounded bg-purple-500" />
        <div className="h-28 w-4 rounded bg-purple-500" />
        <div className="h-16 w-4 rounded bg-purple-500" />
      </div>
    </section>
  );
}