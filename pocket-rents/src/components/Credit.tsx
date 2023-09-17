import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Autocomplete from "@mui/material/Autocomplete";
import { countries } from "../utils/payment";
import { useState } from "react";

export const Credit = ({ reserve, setTextFields, textFields }: any) => {
  return (
    <div>
      <TextField
        sx={{ width: "100%", marginBottom: 1 }}
        id="outlined-basic"
        label="Card Number"
        variant="outlined"
        onChange={(evt) =>
          setTextFields({ ...textFields, card: evt.target.value })
        }
      />
      <div className=" grid grid-cols-2">
        <TextField
          sx={{ width: "100%" }}
          id="outlined-basic"
          label="Expiration"
          variant="outlined"
          onChange={(evt) =>
            setTextFields({ ...textFields, expire: evt.target.value })
          }
        />
        <TextField
          sx={{ width: "100%" }}
          id="outlined-basic"
          label="CVV"
          variant="outlined"
          onChange={(evt) =>
            setTextFields({ ...textFields, cvv: evt.target.value })
          }
        />
      </div>
      <h1 className="font-semibold text-md my-5">Billing Address</h1>

      <TextField
        sx={{ width: "100%", marginBottom: 1 }}
        id="outlined-basic"
        label="Street Address"
        variant="outlined"
        onChange={(evt) =>
          setTextFields({ ...textFields, street: evt.target.value })
        }
      />
      <TextField
        sx={{ width: "100%", marginBottom: 1 }}
        id="outlined-basic"
        label="Apt or suite number"
        variant="outlined"
        onChange={(evt) =>
          setTextFields({ ...textFields, apt: evt.target.value })
        }
      />
      <TextField
        sx={{ width: "100%", marginBottom: 1 }}
        id="outlined-basic"
        label="City"
        variant="outlined"
        onChange={(evt) =>
          setTextFields({ ...textFields, city: evt.target.value })
        }
      />
      <div className="grid grid-cols-2">
        <TextField
          sx={{ width: "100%", marginBottom: 1 }}
          id="outlined-basic"
          label="State"
          variant="outlined"
          onChange={(evt) =>
            setTextFields({ ...textFields, state: evt.target.value })
          }
        />
        <TextField
          sx={{ width: "100%", marginBottom: 1 }}
          id="outlined-basic"
          label="ZIP code"
          variant="outlined"
          onChange={(evt) =>
            setTextFields({ ...textFields, zip: evt.target.value })
          }
        />
      </div>
      <Autocomplete
        id="country-select-demo"
        sx={{ width: "100%" }}
        options={countries}
        autoHighlight
        getOptionLabel={(option) => option.label}
        onChange={(evt, value) => {
          setTextFields({ ...textFields, country: value });
        }}
        renderOption={(props, option) => (
          <Box
            component="li"
            sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
            {...props}
          >
            <img
              loading="lazy"
              width="20"
              src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
              srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
              alt=""
            />
            {option.label} ({option.code}) +{option.phone}
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Choose a country"
            inputProps={{
              ...params.inputProps,
              autoComplete: "new-password", // disable autocomplete and autofill
            }}
          />
        )}
      />
      <div className="md:flex md:justify-center ">
        <p
          onClick={reserve}
          className="cursor-pointer rounded-md my-4 w-full text-center md:w-40 font-semibold border-black border-2 p-2 hover:bg-blue-600 hover:text-white transition ease-in duration-300 "
        >
          Request to book
        </p>
      </div>
    </div>
  );
};
