import Image from "components/atoms/Image";
import RichText from "components/atoms/RichText";
import cn from "classnames";
import ReactPlayer from "react-player";
import styles from "./HeroVideo.module.css";

/**
 * Render the Background component.
 *
 * @param  {object}  props            Background component props.
 * @param  {string}  props.image      The background image.
 * @param  {string}  props.video      The background video.
 * @param  {string}  props.heading    The heading.
 * @param  {string}  props.subheading The subheading.
 * @param  {string}  props.content    The content.
 * @return {Element}                  The Background component.
 */
export default function HeroVideo({
  image,
  video,
  heading,
  subheading,
  content,
}) {
  if (video) {
    return (
      <>
        <div
          className={cn(
            "relative left-0 top-0 h-[400px] w-full [&>div>video]:object-contain [&>div>video]:object-center bg-seafoam align-baseline",
            styles.section
          )}
        >
          <div className="w-full">
            <RichText className="font-rajdhani text-6xl font-regular text-white">
              {heading}
            </RichText>
            <RichText className="pb-8 font-rajdhani text-6xl font-regular text-green">
              {subheading}
            </RichText>
            <RichText className="w-full font-work-sans text-lg font-regular text-white lg:w-1/3  ">
              {content}
            </RichText>
          </div>
          <div className="z-0 flex h-full w-full items-center justify-center">
            <ReactPlayer
              playing
              muted
              playsinline
              url="/images/vercel.mp4"
              className="video:max-w-none absolute max-w-full overflow-hidden z-0"
            />
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div
        className={cn(
          "absolute left-0 top-0 h-full w-full [&>div>video]:object-cover [&>div>video]:object-center",
          styles.section
        )}
      >
        <div className="absolute z-20 w-full px-[5%] pt-[35%] md:pt-[25%] lg:pt-[15%]">
          <RichText
            className={cn(
              styles.heading,
              "font-rajdhani text-6xl font-regular text-white"
            )}
          >
            {heading}
          </RichText>
          <RichText
            className={cn(
              styles.subheading,
              "pb-8 font-rajdhani text-6xl font-regular text-green"
            )}
          >
            {subheading}
          </RichText>
          <RichText
            className={cn(
              styles.content,
              "w-full font-work-sans text-lg font-regular text-white lg:w-1/3"
            )}
          >
            {content}
          </RichText>
        </div>
        {image && (
          <Image
            url={image}
            alt="Background Image"
            priority
            nextImageFill
            className={cn(
              styles.image,
              "relative h-full w-full overflow-hidden"
            )}
          />
        )}
      </div>
    </>
  );
}
