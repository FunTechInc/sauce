import "server-only";
import { utils } from "@funtech-inc/spice/server";
import { PER_PAGE } from "@/app/[lang]/_libs/cms";
import { LocaleLink } from "@/components/LocaleLink";

export const NavArrow = ({ style }: { style?: React.CSSProperties }) => {
   return <span style={style}>＞</span>;
};

export const Pagination = ({
   currentPage = 1,
   totalCount,
   category,
   style,
   ...rest
}: {
   category?: string;
   currentPage?: number;
   totalCount: number;
} & React.HTMLAttributes<HTMLDivElement>) => {
   const _currentPage = +currentPage;
   const range = utils.getPaginationRange(_currentPage, totalCount, PER_PAGE);

   const hrefPath = category
      ? `/sample/category/${category}/page`
      : "/sample/page";

   if (range.length < 2) {
      return null;
   }

   return (
      <div
         {...rest}
         style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "2.4rem",
            ...style,
         }}>
         {_currentPage !== 1 && (
            <LocaleLink href={`${hrefPath}/${_currentPage - 1}`}>
               <NavArrow
                  style={{ rotate: "180deg", display: "inline-block" }}
               />
            </LocaleLink>
         )}
         {range.map((page, i) => {
            if (typeof page === "string") {
               return <p key={i}>{page}</p>;
            } else {
               return (
                  <LocaleLink
                     href={`${hrefPath}/${page}`}
                     style={{
                        color: _currentPage === page ? "red" : "",
                     }}
                     key={i}>
                     {page}
                  </LocaleLink>
               );
            }
         })}
         {_currentPage !== range[range.length - 1] && (
            <LocaleLink href={`${hrefPath}/${_currentPage + 1}`}>
               <NavArrow />
            </LocaleLink>
         )}
      </div>
   );
};
