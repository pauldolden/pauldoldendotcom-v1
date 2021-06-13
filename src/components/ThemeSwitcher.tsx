import React from 'react';
import styled from 'styled-components';
import { flexCenterCenter } from '../styles/globals';
import theme from '../styles/theme';

export const ComponentStyles = styled.div`
  ${flexCenterCenter};
`;

export const Switcher = styled.label`
  height: 1rem;
  width: 4rem;
  background-color: var(--yellow-base);
  position: relative;
  user-select: none;
  margin: 0 3rem;

  &:hover {
    cursor: pointer;
  }

  input:checked {
    left: initial;
    right: -0.6rem;
  }

  input:checked + label {
    left: initial;
    right: -0.5rem;
  }

  input {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -0.6rem;
    z-index: 2;
  }

  label {
    background-color: var(--pink-base);
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    display: block;
    top: 50%;
    transform: translateY(-50%);
    left: -0.5rem;
    position: absolute;
    user-select: none;

    &:hover {
      cursor: pointer;
    }
  }
`;

const ThemeSwitcher = ({ setTheme }: any) => {
  return (
    <ComponentStyles>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill={theme.pink.base}
      >
        <title>lightbulb_outline</title>
        <path d="M14.859 13.078q2.156-1.5 2.156-4.078 0-2.063-1.477-3.539t-3.539-1.477-3.539 1.477-1.477 3.539q0 1.078 0.633 2.25t1.523 1.828l0.844 0.609v2.297h4.031v-2.297zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 3.656-3 5.719v2.297q0 0.422-0.281 0.703t-0.703 0.281h-6q-0.422 0-0.703-0.281t-0.281-0.703v-2.297q-3-2.063-3-5.719 0-2.906 2.039-4.945t4.945-2.039zM9 21v-0.984h6v0.984q0 0.422-0.281 0.703t-0.703 0.281h-4.031q-0.422 0-0.703-0.281t-0.281-0.703z"></path>
      </svg>
      <Switcher htmlFor="checkbox">
        <input hidden id="checkbox" type="checkbox" />
        <label htmlFor="checkbox"></label>
      </Switcher>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill={theme.pink.base}
      >
        <title>lightbulb</title>
        <path d="M12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 3.516-3 5.719v2.297q0 0.422-0.281 0.703t-0.703 0.281h-6q-0.422 0-0.703-0.281t-0.281-0.703v-2.297q-3-2.063-3-5.719 0-2.906 2.039-4.945t4.945-2.039zM9 21v-0.984h6v0.984q0 0.422-0.281 0.703t-0.703 0.281h-4.031q-0.422 0-0.703-0.281t-0.281-0.703z"></path>
      </svg>
    </ComponentStyles>
  );
};

export default ThemeSwitcher;
