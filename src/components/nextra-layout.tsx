"use client";
import { T } from "gt-next/client";
import { usePathname } from "next/navigation";
import { PageMapItem } from "nextra";
import { Layout } from "nextra-theme-docs";
import { Search } from "nextra/components";
import { Footer } from "./footer";
import { Nav } from "./navbar";
import { TabSwitcher } from "./tab-switcher";
import { getSearchPlaceholder } from "./search-placeholder";
const footer = <Footer />;

export const NextraLayout = ({
  pageMap,
  children,
  locale,
  stars,
}: {
  pageMap: PageMapItem[];
  children: React.ReactNode;
  locale: string;
  stars: number;
}) => {
  const pathname = usePathname();
  const isReference = pathname.includes("/reference");
  return (
    <Layout
      search={<Search placeholder={getSearchPlaceholder(locale)} />}
      navbar={
        <div className="flex  sticky top-0 z-30 bg-[var(--primary-bg)] flex-col">
          <Nav stars={stars} />
          <TabSwitcher />
        </div>
      }
      pageMap={pageMap}
      nextThemes={{
        forcedTheme: "dark",
      }}
      toc={{
        title: <T id="_locale_.layout.toc">On This Page</T>,
        extraContent: (
          <div className="flex flex-col">
            {/* Newsletter form removed */}
          </div>
        ),
      }}
      docsRepositoryBase="https://github.com/louloulin/kastrax/blob/main/kastrax-doc"
      footer={footer}
      sidebar={{
        autoCollapse: true,
        defaultMenuCollapseLevel: isReference ? 1 : 2,
      }}
      i18n={[
        { locale: "en", name: "English" },
      ]}
      feedback={{
        content: (
          <T id="_locale_.layout.feedback">Question? Give us feedback</T>
        ),
      }}
      editLink={<T id="_locale_.layout.edit_link">Edit this page</T>}

      // ... Your additional layout options
    >
      {children}
    </Layout>
  );
};
