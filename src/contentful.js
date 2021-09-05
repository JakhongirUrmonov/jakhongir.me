import { createClient } from "contentful";

export default createClient({
  space: REACT_APP_API_SPACE,
  accessToken: REACT_APP_ACCESS_TOKENN,
});
