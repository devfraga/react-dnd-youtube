
interface TaskProps {
  task: {
    id: string;
    name: string;
  }
}

export function Task({ task }: TaskProps) {
  return (
    <div
      className="w-full bg-zinc-300 mb-2 last:mb-0 px-2 py-3 rounded border-[2px] border-zinc-400"
    >
      <p className="font-medium">{task.name}</p>
    </div>
  );
}