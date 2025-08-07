import sendEmail from "../email/actions/sendEmail.js";

export const builtInActions: Record<string, Record<string, Function>> = {
  email: {
    send_outbound_email: sendEmail,
  },
};
export const serviceActionMap: Record<
  string,
  Record<string, Record<string, Function>>
> = {
  google: {
    // youtube: { someYoutubeAction: fn }
  },
  builtin: builtInActions,
};
