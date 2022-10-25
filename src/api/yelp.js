import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer 9wrsOV_vm0vJHk4P9Jy_7mHuGF2Xo0UkK01FNHlX6zTXG91hO4bLTK_vl-En0VWMIKLMByHCzxA0w92Tp-MmB4Sm-ZWGpVg3XKK8ajGhgEtoj9PlNblxaWIpyqBjYHYx'
  }
});
