import { ref } from 'vue';

export const useScroll = (gap = 30) => {
  const scrollContainer = ref(null);

  const scrollLeft = () => {
    if (scrollContainer.value) {
      const itemWidth = scrollContainer.value.querySelector('li').offsetWidth + gap;
      scrollContainer.value.scrollBy({
        left: -itemWidth,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainer.value) {
      const itemWidth = scrollContainer.value.querySelector('li').offsetWidth + gap;
      scrollContainer.value.scrollBy({
        left: itemWidth,
        behavior: 'smooth',
      });
    }
  };

  return { scrollContainer, scrollLeft, scrollRight };
}
