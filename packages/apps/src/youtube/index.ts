import newVideoBySearch from "./triggers/newVideoBySearch.js";
import newCommentOnVideo from "./triggers/newCommentOnVideo.js";

export const youtubeTriggerMap: Record<string, Function> = {
  // optionId: function
  "new video by search": newVideoBySearch,
  "new comment on video": newCommentOnVideo,
};
