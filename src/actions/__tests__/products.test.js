import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { fetchProducts } from '../products';
import { FETCH_PRODUCTS } from '../constants';
import fetchMock from 'fetch-mock'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const productsApi = 'https://api.gousto.co.uk/products/v2.0/products?includes[]=categories&image_sizes[]=365';

describe('fetchProducts', () => {
  afterEach(() => {
    fetchMock.restore()
  })

  const productData = {
    id: "0009468c-33e9-11e7-b485-02859a19531d",
    sku: "AP-ACH-WIN-WHI-23-P",
    title: "Borsao Macabeo",
    description: "A flavoursome Summer wine made from the indigenous Macabeo grape in northern Spain. A balanced, modern white with flavours of ripe peach, zesty lemon and nutty undertones, it leaves the palate with a clean and fruity finish.",
    list_price: "6.95",
    is_vatable: true,
    is_for_sale: true,
    age_restricted: true,
    box_limit: 2,
    always_on_menu: false,
    volume: null,
    zone: null,
    created_at: "2017-05-08T13:22:27+01:00",
    categories: [
      {
        id: "faeedf8a-bf7d-11e5-a0f9-02fada0dd3b9",
        title: "Drinks Cabinet",
        box_limit: 7,
        is_default: false,
        recently_added: false,
        hidden: false,
        pivot: {
          created_at: "2017-05-08T13:22:46+01:00"
        }
      },
      {
        id: "785741fc-3854-11e6-87a5-06f9522b85fb",
        title: "Large Alcohol",
        box_limit: 2,
        is_default: false,
        recently_added: false,
        hidden: true,
        pivot: {
          created_at: "2017-05-08T13:22:46+01:00"
        }
      }
    ],
    tags: [ ],
    images: {
      365: {
        src: "https://production-media.gousto.co.uk/cms/product-image-landscape/YAddOns-WhiteWines-Borsao_013244-x400.jpg",
        url: "https://production-media.gousto.co.uk/cms/product-image-landscape/YAddOns-WhiteWines-Borsao_013244-x400.jpg",
        width: 400
      }
    }
  }


  it.only('creates an async action to fetch the products', () => {
    fetchMock.getOnce(productsApi, {
      body: {
        data: [ productData ]
      },
      headers: { 'content-type': 'application/json' }
    })

    const expectedActions = [
      {
        type: FETCH_PRODUCTS,
        products: {
          data: [ productData ]
        }
      }
    ];

    const store = mockStore({ products: [] });

    return store.dispatch(fetchProducts()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
