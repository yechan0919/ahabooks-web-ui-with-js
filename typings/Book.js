export class GetBookListRequest {
  evaluation; // boolean
  free; // boolean
  offset; // number;
  paged; // boolean;
  pageNumber; // number;
  pageSize; // number;
  sort = {
    sorted: false, // boolean,
    unsorted: false, // boolean,
  };
  stepId; // number;
  unpaged; // boolean;
  size;
  page;
  status; // NONE, WAITING, DONE
}

export class CreateBookRequest {
  auth; // string
  coverImageUrl; // string
  bookFileUrl;
  narrationFileUrl;
  description; // string
  name; // string
  stepId; // number
  version; // string - "EASY",
  free; // boolean
  field; // LITERATURE, NON_LITERATURE
  type; // EVALUATION, GENERAL
}

export class UpdateBookRequest {
  auth; // string
  coverImageUrl; // string
  bookFileUrl;
  narrationFileUrl;
  description; // string
  name; // string
  stepId; // number
  version; // string - "EASY",
  isFree; // boolean
  field; // LITERATURE, NON_LITERATURE
  type; // EVALUATION, GENERAL
}
