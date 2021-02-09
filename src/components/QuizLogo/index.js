import styled from 'styled-components';

import React from 'react';
import PropTypes from 'prop-types';

function Logo({ className }) {
  return (
    <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4e219516-0bde-41ac-bd76-1141d2422b7f/da1pe4v-ff081f2e-50dd-4feb-9dfb-9127faf4a5c9.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl0sIm9iaiI6W1t7InBhdGgiOiIvZi80ZTIxOTUxNi0wYmRlLTQxYWMtYmQ3Ni0xMTQxZDI0MjJiN2YvZGExcGU0di1mZjA4MWYyZS01MGRkLTRmZWItOWRmYi05MTI3ZmFmNGE1YzkucG5nIn1dXX0.meoTALIQEJzHg9Qh8XujZ1kHdpUvDvetpOpNh648kFg" alt="Logo Quiz" width="85%"/>
  );
}

Logo.propTypes = {
  className: PropTypes.string.isRequired,
};

const QuizLogo = styled(Logo)`
  margin: auto;
  display: block;
  @media screen and (max-width: 500px) {
    margin: 0;
  }
`;

export default QuizLogo;