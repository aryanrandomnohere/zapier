import newVideoBySearch from "./triggers/newVideoBySearch.js";
import newCommentOnVideo from "./triggers/newCommentOnVideo.js";
import newLiveStreamTrigger from "./triggers/newLiveStreamTrigger.js";
import newVideoInChannel from "./triggers/newVideoInChannel.js";
import newVideoInPlaylist from "./triggers/newVideoInPlaylist.js";

export const youtubeTriggerMap: Record<string, Function> = {
  // optionId: function
  new_video_by_search: newVideoBySearch,
  new_comment_on_video: newCommentOnVideo,
  new_live_stream: newLiveStreamTrigger,
  new_video_in_channel: newVideoInChannel,
  new_video_in_playlist: newVideoInPlaylist,
};
