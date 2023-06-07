const handleRedirect = (i = 1, navigate = f => f) => {
    switch (i) {
      case 1:
        navigate('/');
        break;
      case 2:
        navigate('/about');
        break;
      case 3:
        navigate('/pricing');
        break;
      case 4:
        navigate('/contact');
        break;
      default:
        navigate('/');
        break;
    }
  };

export {handleRedirect}