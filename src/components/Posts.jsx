import { useRef } from "react";
import clsx from "clsx";
import useLazyLoad from "../Hooks/useLazyLoad";
import { Card } from "./Card";
import { LoadingPosts } from "./Loading";

const NUM_PER_PAGE = 6;
const TOTAL_PAGES = 4;

export const Posts = () => {
  const images = new Array(24);
  for (let i = 0; i < 24; i++) {
    images[i] = `/images/image${i + 1}.webp`;
  }
  const triggerRef = useRef(null);
  const onGrabData = (currentPage) => {
    // This would be where you'll call your API
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = images.slice(
          ((currentPage - 1) % TOTAL_PAGES) * NUM_PER_PAGE,
          NUM_PER_PAGE * (currentPage % TOTAL_PAGES) === 0
            ? NUM_PER_PAGE * TOTAL_PAGES
            : NUM_PER_PAGE * (currentPage % TOTAL_PAGES)
        );
        resolve(data);
      }, 1000);
    });
  };
  const { data, loading } = useLazyLoad({ triggerRef, onGrabData });
  return (
    <>
      <div className="grid grid-cols-3 gap-4 content-start">
        {data.map((image, i) => {
          return <Card key={i} name={`image${i + 1}`} imageUrl={image} />;
        })}
      </div>
      <div ref={triggerRef} className={clsx("trigger", { visible: loading })}>
        <LoadingPosts />
      </div>
    </>
  );
};
