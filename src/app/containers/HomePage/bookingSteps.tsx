import {
  faCalendarAlt,
  faCarSide,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.div`
  ${tw`
        w-full
        flex
        flex-col
        items-center
        pt-3
        pb-3
        lg:pt-6
        lg:pb-6 
    `};
`;

const Title = styled.h2`
  ${tw`
    text-3xl
    lg:text-5xl
    text-black
    font-extrabold
    ml-7
    mr-7
    `};
`;

const StepsContainer = styled.div`
  ${tw`
    flex
    justify-evenly
    flex-wrap
    mt-7
    lg:mt-16
    `}
`;

const StepContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-16
    md:w-96
    items-center
    transition-colors
    hover:text-green-500
    m-3
    `};
`;

const Step = styled.div`
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  ${tw`
    flex
    rounded-lg
    items-center
    justify-center
    p-6
    `};
`;

const StepTitle = styled.h4`
  ${tw`
  text-black
    text-lg
    sm:text-base
    font-semibold
    mt-4
`};
`;

const StepDescription = styled.p`
  ${tw`
    w-10/12
    text-sm
    md:text-sm
    text-center
    text-gray-600
`}
`;

const StepIcon = styled.span`
  ${tw`
    text-green-500
    text-3xl
    `};
`;

export function BookingSteps() {
  return (
    <Container>
      <Title>Såhär går det till när du ska hyra en bil</Title>
      <StepsContainer>
        <StepContainer>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faMapMarkedAlt} />
            </StepIcon>
          </Step>
          <StepTitle>Välj Plats</StepTitle>
          <StepDescription>
            Hitta närmaste hämtplats och boka din bil.
          </StepDescription>
        </StepContainer>
        <StepContainer>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faCalendarAlt} />
            </StepIcon>
          </Step>
          <StepTitle>Datum</StepTitle>
          <StepDescription>Välj datum för bokning av din bil.</StepDescription>
        </StepContainer>
        <StepContainer>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faCarSide} />
            </StepIcon>
          </Step>
          <StepTitle>Boka Din Bil</StepTitle>
          <StepDescription>Vi gör det enkelt att hyra bil</StepDescription>
        </StepContainer>
      </StepsContainer>
    </Container>
  );
}
