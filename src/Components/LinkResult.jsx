import React, { useEffect, useState } from 'react';
import CopyToClipBoard from 'react-copy-to-clipboard';
import axios from 'axios';
const LinkResult = ({ inputValue }) => {
  const [shortenedLink, setShortenedLink] = useState('Hello');
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (inputValue.length) {
      const fetchData = async () => {
        try {
          setLoading(true);
          const res = await axios(
            `https://api.shrtco.de/v2/shorten?url=${inputValue}`
          );

          console.log(res);
          setShortenedLink(res.data.result.full_short_link);
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }
  }, [inputValue]);
  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [copied]); //this function basically changes the button back to
  //normal after clicking to copy it.

  if (loading) {
    return <p className="no-data">loading ....</p>;
  }
  if (error) {
    return <p className="no-data">Something went Wrong</p>;
  }

  return (
    <>
      {shortenedLink && (
        <div className="linkresult-container">
          <p>{shortenedLink}</p>

          <CopyToClipBoard text={shortenedLink} onCopy={() => setCopied(true)}>
            <button className={copied && 'copied'}>copy to clipboard</button>
          </CopyToClipBoard>
        </div>
      )}
    </>
  );
};

export default LinkResult;
