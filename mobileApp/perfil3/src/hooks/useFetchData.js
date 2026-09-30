import { useCallback, useEffect, useState } from 'react';

export default function useFetchData(initialUrl) {
  const [data, setData] = useState([]);
  const [nextUrl, setNextUrl] = useState(initialUrl);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState(null);

  const fetchPage = useCallback(async (url, reset = false) => {
    try {
      setError(null);
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Error del servidor (${response.status})`);
      const json = await response.json();

      setData((prev) => (reset ? json.results : [...prev, ...json.results]));
      setNextUrl(json.info?.next ?? null);
    } catch (err) {
      setError(err.message?.startsWith('Error del servidor') ? err.message : 'No se pudo cargar la información. Revisa tu conexión a internet.');
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  }, []);

  useEffect(() => {
    fetchPage(initialUrl, true);
  }, [initialUrl, fetchPage]);

  const loadMore = () => {
    if (!nextUrl || loading || loadingMore) return;
    setLoadingMore(true);
    fetchPage(nextUrl);
  };

  const refetch = () => {
    setLoading(true);
    fetchPage(initialUrl, true);
  };

  return { data, loading, loadingMore, error, hasMore: !!nextUrl, loadMore, refetch };
}
