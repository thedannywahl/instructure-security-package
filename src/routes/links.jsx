import {
  Button,
  FormFieldGroup,
  Heading,
  IconButton,
  IconCopyLine,
  IconSearchLine,
  IconTroubleLine,
  Link,
  RadioInput,
  RadioInputGroup,
  Table,
  Text,
  TextInput,
  ToggleDetails,
  Tooltip,
  View,
} from "@instructure/ui";
import { useState } from "react";
import { useParams } from "react-router-dom";
// Modules
import global from "../variables/globals";

import RenderFooter from "../components/RenderFooter";
// Components
import RenderTopNavBar from "../components/RenderTopNavBar";
import strings from "../strings/links";
import { getLang, getStrings } from "../utils/langs";
import { globalBrands, globalSubBrands } from "../variables/brands";
import { globalLangDetails, globalLangs } from "../variables/langs";
import Redirects from "../variables/redirects";

// Page
export default function Links() {
  const l = getLang(useParams().language);
  const s = getStrings(strings, l);

  const fromPrefix = global.url.replace("https://", "");

  const [query, setQuery] = useState({
    search: "",
  });

  const [lang, setLang] = useState({
    codes: l,
  });

  const [activeBrand, setActiveBrand] = useState("all");

  const [brands, setBrands] = useState({
    list: globalSubBrands,
  });

  const [activeProduct, setActiveProduct] = useState("all");

  const [products, setProducts] = useState({
    list: globalBrands,
  });

  const [links, setLinks] = useState({
    list: Redirects.map((brands) => ({
      ...brands,
      links: brands.links.filter((link) => link.lang.toUpperCase() === l),
    })),
  });

  const [toggle, setExpanded] = useState({
    expanded: false,
    text: s.toggleShow,
  });

  const handleQueryChange = (e, v) => {
    setQuery({
      search: v,
    });
    handleChange(lang.codes, v, brands.list, activeProduct);
  };

  const handleLangChange = (e, v) => {
    const arr = [];
    if (v === "all") {
      arr.push(...globalLangs);
      handleProductChange(e, "all");
    } else {
      arr.push(
        ...globalLangs.filter((lang) =>
          lang.toUpperCase().includes(v.toUpperCase()),
        ),
      );
    }
    setLang({
      codes: arr,
    });
    handleChange(arr, query.search, brands.list, activeProduct);
  };

  const handleProductChange = (e, v) => {
    setActiveProduct(v);
    handleChange(lang.codes, query.search, brands.list, v);
  };

  const handleBrandChange = (e, v) => {
    const arr = [];
    if (v === "all") {
      arr.push(...globalSubBrands);
    } else {
      arr.push(
        ...["AWS", ...globalSubBrands].filter((brand) =>
          brand.toLowerCase().includes(v.toLowerCase()),
        ),
      );
    }
    setActiveBrand(v);
    setBrands({
      list: arr,
    });
    handleProductChange(e, "all");
    setProducts({
      list: arr,
    });
    handleChange(lang.codes, query.search, arr, "all");
  };

  const handleChange = (l, q, b, p) => {
    const filteredLinks = Redirects.map((brands) => ({
      ...brands,
      links: brands.links
        .filter((link) =>
          `${`${brands.brand} ${link.title}`}`
            .toLowerCase()
            .includes(q.toLowerCase()),
        )
        .filter((link) => l.includes(link.lang.toUpperCase())),
    }))
      .filter((brands) => brands.links.length > 0)
      .filter((brands) => b.includes(brands.brand))
      .filter((brands) =>
        p !== "all"
          ? brands.brand === products.list[0] || brands.brand === p
          : true,
      );
    setLinks({
      list: filteredLinks,
    });
  };

  const handleToggleChange = () => {
    const t = toggle.expanded ? s.toggleShow : s.toggleHide;
    setExpanded({
      expanded: !toggle.expanded,
      text: t,
    });
  };

  const renderClearButton = (e) => {
    if (query.search.length) {
      return (
        <IconButton
          type="button"
          size="small"
          withBackground={false}
          withBorder={false}
          screenReaderLabel={s.clearSearch}
          onClick={handleQueryClear}
        >
          <IconTroubleLine />
        </IconButton>
      );
    }
  };

  const handleQueryClear = (e) => {
    e.stopPropagation();
    handleQueryChange(e, "");
  };

  async function copy(text) {
    try {
      await navigator.clipboard.writeText(text);
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <>
      <RenderTopNavBar language={l} />
      <View
        id="main"
        as="div"
        padding="medium medium xx-large"
        minWidth="20rem"
        maxWidth="59.25rem"
        margin="0 auto"
      >
        <View as="div" margin="none none x-large">
          <Heading level="h1">{s.header}</Heading>
          <Text as="p">{s.description}</Text>
          <Button onClick={handleToggleChange}>{toggle.text}</Button>
          <ToggleDetails
            id="toggleFilters"
            summary={s.filters}
            onToggle={handleToggleChange}
            expanded={toggle.expanded}
          >
            <View as="div" margin="large none none">
              <form name="searchFilters" autoComplete="off">
                <FormFieldGroup label="" description="" layout="stacked">
                  <TextInput
                    type="search"
                    renderLabel={s.search}
                    placeholder={s.placeholder}
                    onChange={handleQueryChange}
                    renderBeforeInput={<IconSearchLine inline={false} />}
                    renderAfterInput={renderClearButton}
                    value={query.search}
                  />
                  <RadioInputGroup
                    name="brand"
                    description={s.brands}
                    defaultValue="all"
                    layout="columns"
                    variant="toggle"
                    onChange={handleBrandChange}
                  >
                    <RadioInput
                      key="all"
                      value="all"
                      label="All"
                      context="off"
                    />
                    {["AWS", ...globalBrands].map((brand) => (
                      <RadioInput
                        key={brand}
                        value={brand}
                        label={brand}
                        context="off"
                      />
                    ))}
                  </RadioInputGroup>
                  {activeBrand !== "all" && products.list.length > 1 && (
                    <RadioInputGroup
                      name="product"
                      description={s.products}
                      defaultValue="all"
                      layout="columns"
                      variant="toggle"
                      onChange={handleProductChange}
                    >
                      <RadioInput
                        key="all"
                        value="all"
                        label="All"
                        context="off"
                        id="allProducts"
                        checked={activeProduct === "all"}
                      />

                      {products.list
                        .filter((product) => product !== activeBrand)
                        .map((product) => {
                          return (
                            <RadioInput
                              key={product}
                              value={product}
                              label={product}
                              context="off"
                            />
                          );
                        })}
                    </RadioInputGroup>
                  )}
                  <RadioInputGroup
                    name="language"
                    description={s.language}
                    defaultValue={l}
                    layout="columns"
                    variant="toggle"
                    onChange={handleLangChange}
                  >
                    <RadioInput
                      key="all"
                      value="all"
                      label="All"
                      context="off"
                    />
                    {globalLangDetails.map((lang) => (
                      <RadioInput
                        key={lang.code}
                        value={lang.code}
                        label={lang.local}
                        context="off"
                      />
                    ))}
                  </RadioInputGroup>
                </FormFieldGroup>
              </form>
            </View>
          </ToggleDetails>
        </View>
        {links.list.map((brands) => {
          if (brands.links.length) {
            const brand = brands.brand;
            return (
              <View key={brand} as="div" margin="none none xx-large">
                <Heading
                  level={globalBrands.includes(brand) ? "h2" : "h3"}
                  id={brand}
                >
                  {brand}
                </Heading>

                <Table hover caption={brand}>
                  <Table.Head>
                    <Table.Row>
                      <Table.ColHeader id="Title" width="25%">
                        {s.title}
                      </Table.ColHeader>
                      <Table.ColHeader id="URLs">{s.link}</Table.ColHeader>
                    </Table.Row>
                  </Table.Head>
                  <Table.Body>
                    {brands.links.map((link) => {
                      return (
                        <Table.Row key={link.title}>
                          <Table.Cell>
                            <Text>{link.title}</Text>
                          </Table.Cell>
                          <Table.Cell>
                            <Link
                              href={`https://${fromPrefix}${link.from}`}
                            >{`${fromPrefix}${link.from}`}</Link>
                            &nbsp;&nbsp;
                            <Tooltip
                              renderTip={s.copy}
                              on={["hover", "focus"]}
                              placement="top"
                              color="primary-inverse"
                            >
                              <IconButton
                                withBackground={false}
                                withBorder={false}
                                screenReaderLabel={s.copy_url}
                                onClick={() => {
                                  copy(`https://${fromPrefix}${link.from}`);
                                }}
                              >
                                <IconCopyLine />
                              </IconButton>
                            </Tooltip>
                            <br />
                            <Text size="small" color="secondary">
                              {link.to.split("?")[0]}
                            </Text>
                          </Table.Cell>
                        </Table.Row>
                      );
                    })}
                  </Table.Body>
                </Table>
              </View>
            );
          }
          return null;
        })}
      </View>
      <RenderFooter language={l} />
    </>
  );
}