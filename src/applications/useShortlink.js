import create from "zustand";
import { persist } from "zustand/middleware";
import axios from "axios";
import { toast } from "react-toastify";

const timer = 10 * 1000;

const shortlink = create(
  persist(
    (set) => ({
      listLink: [],
      //
      addShortlink: async (payload) => {
        try {
          const loading = toast.loading("generate...");

          const { data } = await axios.post("/api/generate", { url: payload });
          const { id, url } = data.data;

          set((prev) => ({
            ...prev,
            listLink: [{ id, url }, ...prev.listLink],
          }));

          toast.update(loading, {
            render: "check frist table...",
            type: "success",
            isLoading: false,
            autoClose: timer,
          });
        } catch (error) {
          toast.update(loading, {
            render: "ouch.. i make mistake :(.",
            type: "error",
            isLoading: false,
            autoClose: timer,
          });
        }
      },
    }),
    { name: "link-storage" }
  )
);

export default shortlink;
