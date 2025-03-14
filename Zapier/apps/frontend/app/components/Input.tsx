export default function Input({label,placeholder = "",onChange,value,type}:{label:string,placeholder:string,onChange:any, value:string,type?:string}) {
  return (
    <div className="flex flex-col">
    <label className="text-sm font-semibold pb-0.5 ">{label}</label>
    <input required={true} type={type} onChange={(e)=>onChange(e.target.value)} value={value} placeholder={placeholder} className="border border-black/20 px-2 py-1.5 rounded max-w-96 "/>
    </div>
  )
}
