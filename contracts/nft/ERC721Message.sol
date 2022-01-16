// SPDX-License-Identifier: MIT OR Apache-2.0
pragma solidity >=0.6.11;

import {TypedMemView} from "@summa-tx/memview-sol/contracts/TypedMemView.sol";

library ERC721Message {
    using TypedMemView for bytes;
    using TypedMemView for bytes29;
}
