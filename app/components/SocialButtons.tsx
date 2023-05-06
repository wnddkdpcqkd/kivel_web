import { colors } from "./color";
import { BlogIcon, HomeIcon, Instagram } from "./svg";

export default function SocialButtons({
  onClickHome,
  onClickInstagram,
  onClickBlog,
}: {
  onClickHome(): void;
  onClickInstagram(): void;
  onClickBlog(): void;
}) {
  return (
    <div className="flex gap-x-4">
      <button onClick={onClickHome}>
        <HomeIcon width={24} height={24} color={colors.gray[90]} />
      </button>
      <button onClick={onClickInstagram}>
        <Instagram width={24} height={24} color={colors.gray[90]} />
      </button>
      <button onClick={onClickBlog}>
        <BlogIcon width={24} height={24} color={colors.gray[90]} />
      </button>
    </div>
  );
}
