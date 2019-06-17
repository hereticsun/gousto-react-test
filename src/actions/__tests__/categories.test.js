import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { fetchCategories } from '../categories';
import { FETCH_CATEGORIES } from '../constants';
import fetchMock from 'fetch-mock'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const categoriesApi = 'https://api.gousto.co.uk/products/v2.0/categories';


describe('fetchCategories', () => {
  afterEach(() => {
    fetchMock.restore()
  })

  it.only('creates an async action to fetch the categories', () => {
    fetchMock.getOnce(categoriesApi, {
      body: {
        data: [
          {
            id: "faeedf8a-bf7d-11e5-a0f9-02fada0dd3b9",
            title: "Drinks Cabinet",
            box_limit: 7,
            is_default: false,
            recently_added: false,
            hidden: false
          }
        ]
      },
      headers: { 'content-type': 'application/json' }
    })

    const expectedActions = [
      {
        type: FETCH_CATEGORIES,
        categories: {
          data: [
            {
              id: "faeedf8a-bf7d-11e5-a0f9-02fada0dd3b9",
              title: "Drinks Cabinet",
              box_limit: 7,
              is_default: false,
              recently_added: false,
              hidden: false
            }
          ]
        }
      }
    ];

    const store = mockStore({ categories: [] });

    return store.dispatch(fetchCategories()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
