const appearance = {
    theme: 'Bubblegum',
    variables: {
      fontWeightNormal: '500',
      borderRadius: '2px',
      colorPrimary: '#f360a6',
      colorIconTabSelected: '#fff',
      spacingGridRow: '16px'
    },
    rules: {
      '.Tab, .Input, .Block, .CheckboxInput, .CodeInput': {
        boxShadow: '0px 3px 10px rgba(18, 42, 66, 0.08)'
      },
      '.Block': {
        borderColor: 'transparent'
      },
      '.BlockDivider': {
        backgroundColor: '#ebebeb'
      },
      '.Tab, .Tab:hover, .Tab:focus': {
        border: '0'
      },
      '.Tab--selected, .Tab--selected:hover': {
        backgroundColor: '#f360a6',
        color: '#fff'
      }
    }
  };
  
  // Pass the appearance object to the Elements instance
  const elements = stripe.elements({clientSecret, appearance});