import { useCallback } from "react";
import PropTypes from "prop-types";

import { useFormikContext } from "formik";

import { Checkbox as MuiCheckbox, FormControlLabel } from "@mui/material";

const Checkbox = ({ name, label, ...rest }) => {
  const { values, setFieldTouched, setFieldValue, handleBlur } = useFormikContext();

  const value = values[name];

  const handleChange = useCallback(
    (event) => {
      setFieldTouched(name);
      setFieldValue(name, event.target.checked);
    },
    [name, setFieldTouched, setFieldValue]
  );

  return (
    <>
      <FormControlLabel
        control={
          <MuiCheckbox
            checked={value}
            name={name}
            onBlur={handleBlur}
            onChange={handleChange}
            {...rest}
          />
        }
        label={label}
      />
    </>
  );
};

Checkbox.propTypes = {
  disabled: PropTypes.bool,
  "data-testid": PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default Checkbox;