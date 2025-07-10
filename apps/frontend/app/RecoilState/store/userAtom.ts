import { useSession } from "next-auth/react";
import { selector } from "recoil";

const user = selector({
  key: "UserInfo",
  get: async () => {
    const session = await useSession();
  },
});
