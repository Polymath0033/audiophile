import { onMounted, onUnmounted, ref, type Ref } from "vue";
export const useResponsive = () => {
  const mode: Ref<"desktop" | "tablet" | "mobile"> = ref("desktop");
  const updateMode = () => {
    if (window.innerWidth >= 1024) {
      mode.value = "desktop";
    } else if (window.innerWidth >= 768) {
      mode.value = "tablet";
    } else {
      mode.value = "mobile";
    }
  };
  onMounted(() => {
    updateMode();
    window.addEventListener("resize", updateMode);
  });
  onUnmounted(() => {
    window.removeEventListener("resize", updateMode);
  });
  return { mode };
};
