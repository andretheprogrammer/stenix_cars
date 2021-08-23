import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Logo } from "../logo";

const FooterContainer = styled.div`
  background-color: #1d2124;
  ${tw`
    flex
    flex-col
    min-w-full
    pt-10
    md:pt-16
    items-center
    justify-center
    `};
`;

const InnerContainer = styled.div`
  ${tw`
    flex
    w-full
    h-full
    max-w-screen-2xl
    flex-wrap
    `};
`;

const BottomContainer = styled.div`
  ${tw`
        flex
        justify-center
        md:justify-start
        max-w-screen-2xl
        mt-7
        md:mt-1
    `};
`;

const CopyrightText = styled.small`
  font-size: 11px;
  ${tw`
    text-gray-300
    `}
`;

const AboutContainer = styled.div`
  ${tw`
        flex
        flex-col
        mr-2
        md:mr-16
        pl-10
        pr-10
        md:pl-3
        md:pr-3
        
    `};
`;

const AboutText = styled.p`
  ${tw`
    text-white
    text-sm
    font-normal
    max-w-xs
    leading-5
    mt-2
    `};
`;

const SectionContainer = styled.div`
  ${tw`
  w-full
  md:w-auto
  flex  
  flex-col
  mr-2
  md:mr-12
  pl-10
  pr-10
  md:pl-3
  md:pr-3
  mt-7
  md:mt-0
`};
`;

const LinksList = styled.ul`
  ${tw`
    outline-none
    list-none
    flex
    flex-col
    `};
`;

const ListItem = styled.li`
  ${tw`
    mb-3
    `};

  & > a {
    ${tw`
        text-sm
        text-white
        `};
  }
`;

const HeaderTitle = styled.h3`
  ${tw`
    text-2xl
    font-bold
    text-white
    mb-3
`};
`;

const HorizontalContainer = styled.div`
  ${tw`
    flex
    items-center
    `};
`;

const GreenIcon = styled.span`
  ${tw`
    w-10
    h-10
    rounded-full
    flex
    items-center
    justify-center
    text-white
    text-base
    bg-green-500
    mr-2
    `};
`;

const SmallText = styled.h6`
  ${tw`
    text-sm
    text-white
    `};
`;

export function Footer() {
  return (
    <FooterContainer>
      <InnerContainer>
        <AboutContainer>
          <Logo color="white" bgColor="white" />
          <AboutText>
            Stenix är ett biluthyrningsföretag stationerat i Stockholm grundat
            av Stenis som har hyrbilar av högsta kvalité och de bästa
            erbjudandet.{" "}
          </AboutText>
        </AboutContainer>
        <SectionContainer>
          <HeaderTitle>Länkar</HeaderTitle>
          <LinksList>
            <ListItem>
              <a href="#">Home</a>
            </ListItem>
            <ListItem>
              <a href="#">Om oss</a>
            </ListItem>
          </LinksList>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Övriga Länkar</HeaderTitle>
          <LinksList>
            <ListItem>
              <a href="#">FAQ</a>
            </ListItem>
          </LinksList>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Ring Nu</HeaderTitle>
          <HorizontalContainer>
            <GreenIcon>
              <FontAwesomeIcon icon={faPhoneAlt} />
            </GreenIcon>
            <SmallText>+46707443322</SmallText>
          </HorizontalContainer>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Maila Oss</HeaderTitle>

          <HorizontalContainer>
            <GreenIcon>
              <FontAwesomeIcon icon={faEnvelope} />
            </GreenIcon>
            <SmallText>info@stenix.com</SmallText>
          </HorizontalContainer>
        </SectionContainer>
      </InnerContainer>
      <BottomContainer>
        <CopyrightText>
          Copyright &copy; {new Date().getFullYear()} Stenix Med Fulla
          Rättigheter
        </CopyrightText>
      </BottomContainer>
    </FooterContainer>
  );
}
