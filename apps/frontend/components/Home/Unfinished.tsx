"use client";
import useZaps from "../../hooks/useZaps";
import CardScroller from "./CardScroller";
import { ZapCard } from "./ZapCard";
import { InlineLoading } from "../ui/LoadingSpinner";

export default function Unfinished() {
  const { zaps, loading } = useZaps();
  console.log(zaps);
  if (loading) {
    return (
      <div className="flex justify-center py-8">
        <InlineLoading text="Loading Zaps..." />
      </div>
    );
  }

  // Commented out skeleton loading
  // return (
  //   <div className="space-y-10">
  //     <CardScroller title="Unfinished Zaps">
  //       {Array.from({ length: 4 }).map((_, index) => (
  //         <CardLoading key={index} />
  //       ))}
  //     </CardScroller>
  //   </div>
  // );

  return (
    <div className="space-y-10">
      {/* Get Started */}
      {/* ... Your existing get started card ... */}

      {/* Unfinished Zaps */}
      <CardScroller title="Unfinished Zaps">
        {zaps.map((zap) => (
          <ZapCard
            msg={zap.published ? "Published" : "Not published"}
            id={Number(zap.id)}
            key={zap.id}
            name={zap.name}
            lastEdited={formatEditedTime(zap.lastEdited)}
            triggerImage={zap.trigger?.type?.imagePath}
            actions={zap.actions.map((a: { actionDetails: { imagePath: string } }) => ({
              imagePath: a.actionDetails?.imagePath,
            }))}
          />
        ))}
      </CardScroller>

      {/* Popular Templates */}
      {/* <CardScroller
        title="Popular templates"
        rightSlot={<a className="text-sm text-indigo-600" href="#">Browse all templates</a>}
      >
        <TemplateCard
          icon="/icons/slack.svg"
          title="Send Slack notifications if your Zaps run into errors"
          badgeText="🔥 New to trending"
        />
        <TemplateCard
          icon="/icons/wave.svg"
          title="Add new Wave invoices to Google Sheets rows"
          badgeText="🔥 New to trending"
        />
        {/* ...more cards */}
      {/* </CardScroller> */}
    </div>
  );
}

function formatEditedTime(lastEdited: string): string {
  const editedDate = new Date(lastEdited);
  const diffMs = Date.now() - editedDate.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  if (diffMins < 60) return `${diffMins} minutes ago`;
  const diffHours = Math.floor(diffMins / 60);
  if (diffHours < 24) return `${diffHours} hours ago`;
  const diffDays = Math.floor(diffHours / 24);
  return `${diffDays} day${diffDays > 1 ? "s" : ""} ago`;
}
