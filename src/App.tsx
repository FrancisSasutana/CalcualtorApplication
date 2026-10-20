

const buttons: {label: string; styles: "num"|"fn"|"op"|"eq"}[]= [
  {label: "ON", styles:"fn"},{label: "OFF", styles:"fn"}, {label: "CLEAR", styles:"fn"},
  {label: "1", styles: "num"}, {label: "2", styles: "num"}, {label: "3", styles: "num"},
  {label: "4", styles: "num"}, {label: "5", styles: "num"}, {label: "6", styles: "num"},
  {label: "7", styles: "num"}, {label: "8", styles: "num"}, {label: "9", styles: "num"},
  {label: "0", styles: "num"}, {label: "+", styles: "op"}, {label: "=", styles: "eq"},
  {label: "-", styles: "op"}, {label: "×", styles: "op"}, {label: "÷", styles: "op"}
]


const styles = {
  num: "bg-slate-700 text-white hover:bg-slate-600",
  fn: "bg-slate-500 text-white hover:bg-slate-400",
  op: "bg-amber-500 text-white hover:bg-amber-400",
  eq: "bg-amber-500 text-white hover:bg-amber-400",
};




export default function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-900 p-4">
      <div className="w-full max-w-xs rounded-3xl bg-slate-800 p-4 shadow-2xl">

        <div className="mb-4 flex h-28 flex-col items-end justify-end overflow-hidden rounded-2xl bg-slate-900 px-4 py-3">
          <span className="text-sm text-slate-400">0</span>
          <span className="w-full truncate text-right text-5xl font-light text-white">0</span>
        </div>

        <div className="grid grid-cols-4 gap-3">
          {buttons.map((btn) => (
            <button
              key={btn.label}
              type="button"
              className ={`h-16 rounded-2xl text-2xl font-medium transition active:scale-95 ${styles[btn.styles]}`}>
              {btn.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
