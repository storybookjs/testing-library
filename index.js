import { once } from '@storybook/client-logger';
import { instrument } from '@storybook/instrumenter';
import * as domTestingLibrary from '@testing-library/dom';
import _userEvent from '@testing-library/user-event';
import dedent from 'ts-dedent';

const testingLibrary = instrument(
  { ...domTestingLibrary },
  {
    intercept: (method, path) => path[0] === 'fireEvent' || method.startsWith('findBy'),
    getArgs: (call, state) => {
      if (!state.isDebugging) return call.args;
      if (call.method.startsWith('findBy')) {
        const [value, queryOptions, waitForOptions] = call.args;
        return [value, queryOptions, { ...waitForOptions, timeout: 60000, interval: Infinity }];
      }
      if (call.method.startsWith('waitFor')) {
        const [callback, options] = call.args;
        return [callback, { ...options, timeout: 60000, interval: Infinity }];
      }
      return call.args;
    }
  }
);

testingLibrary.screen = Object.entries(testingLibrary.screen).reduce(
  (acc, [key, val]) =>
    Object.defineProperty(acc, key, {
      get() {
        once.warn(dedent`
          You are using Testing Library's \`screen\` object. Use \`within(canvasElement)\` instead.

          More info: https://storybook.js.org/docs/react/essentials/interactions
        `);
        return val;
      },
    }),
  testingLibrary.screen
);

// console.log(Object.keys(domTestingLibrary).join(',\n'));
export const {
  buildQueries,
  configure,
  createEvent,
  findAllByAltText,
  findAllByDisplayValue,
  findAllByLabelText,
  findAllByPlaceholderText,
  findAllByRole,
  findAllByTestId,
  findAllByText,
  findAllByTitle,
  findByAltText,
  findByDisplayValue,
  findByLabelText,
  findByPlaceholderText,
  findByRole,
  findByTestId,
  findByText,
  findByTitle,
  fireEvent,
  getAllByAltText,
  getAllByDisplayValue,
  getAllByLabelText,
  getAllByPlaceholderText,
  getAllByRole,
  getAllByTestId,
  getAllByText,
  getAllByTitle,
  getByAltText,
  getByDisplayValue,
  getByLabelText,
  getByPlaceholderText,
  getByRole,
  getByTestId,
  getByText,
  getByTitle,
  getConfig,
  getDefaultNormalizer,
  getElementError,
  getNodeText,
  getQueriesForElement,
  getRoles,
  getSuggestedQuery,
  isInaccessible,
  logDOM,
  logRoles,
  prettyDOM,
  queries,
  queryAllByAltText,
  queryAllByAttribute,
  queryAllByDisplayValue,
  queryAllByLabelText,
  queryAllByPlaceholderText,
  queryAllByRole,
  queryAllByTestId,
  queryAllByText,
  queryAllByTitle,
  queryByAltText,
  queryByAttribute,
  queryByDisplayValue,
  queryByLabelText,
  queryByPlaceholderText,
  queryByRole,
  queryByTestId,
  queryByText,
  queryByTitle,
  queryHelpers,
  screen,
  waitFor,
  waitForElementToBeRemoved,
  within,
  prettyFormat,
} = testingLibrary;

export const { userEvent } = instrument({ userEvent: _userEvent }, { intercept: true });
