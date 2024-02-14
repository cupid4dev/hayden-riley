import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: { t: TFunction }) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Language>{t("Contact")}</Language>
              <Large to="/">{t("Tell me everything")}</Large>
              <Para>
                {t(`Do you have any question? Feel free to reach out.`)}
              </Para>
              <a href="mailto:rileyhayden169@gmail.com">
                <Chat>{t(`Let's Chat`)}</Chat>
              </a>
            </Col>
            <Col lg={8} md={8} sm={12} xs={12}>
              <Language>{t("Address")}</Language>
              <Para>Moffat, DG10 9EX</Para>
              <Para>United Kingdom</Para>
            </Col>
          </Row>
        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <NavLink to="/">
              <LogoContainer>
                <img src="/img/pfp/avatar.png" width="100px" height="100px" />
              </LogoContainer>
            </NavLink>
            <FooterContainer>
              <SocialLink
                  href="https://github.com/lifeisgooddev"
                  src="github.svg"
                />
                <SocialLink
                  href="https://www.linkedin.com/in/hayden-riley-792bb6261/"
                  src="linkedin.svg"
                />
                <SocialLink
                  href="https://discord.gg/7vu8Ub92"
                  src="discord.svg"
                />
                <SocialLink
                  href="https://t.me/littlecupid526"
                  src="telegram.svg"
                />
                <SocialLink
                  href="https://join.skype.com/invite/WBbCLd0QJ4bl"
                  src="skype.svg"
                />
                <SocialLink
                  href="https://wa.me/13107357001"
                  src="whatsapp.svg"
                />
            </FooterContainer>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
