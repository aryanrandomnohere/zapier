import ZapCell from "@/app/components/ZapCell";

export default function page() {
  return (
    <div className="flex flex-col justify-center items-center min-w-screen h-screen ">
    <ZapCell title="Trigger" subtitle="An event that starts your Zap" order={1}  />
    <ZapCell title="Action" subtitle="An event a Zap performs after it starts" order={2} />
        </div>
  )
}
