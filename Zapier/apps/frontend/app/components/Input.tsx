export default function Input({label,placeholder = "",onChange,value}:{label:string,placeholder:string,onChange:any, value:string}) {
  return (
    <div className="flex flex-col">
    <label className="text-sm font-semibold pb-0.5">{label}</label>
    <input onChange={(e)=>onChange(e.target.value)} value={value} placeholder={placeholder} className="border px-2 py-1.5 rounded max-w-96 "/>
    </div>
  )
}
