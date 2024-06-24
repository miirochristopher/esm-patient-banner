import { openmrsFetch, restBaseUrl } from "@openmrs/esm-framework";
import useSWR from "swr";

export function useDashscore(patientUuid: string) {
  const apiUrl = `${restBaseUrl}/outcomes/score/${patientUuid}`;

  const { data, error, isLoading, isValidating } = useSWR<{ data: DashScoreResponse }, Error>(
    patientUuid ? apiUrl : null,
    openmrsFetch,
  );

  return {
    data: data ? data.data.result : null,
    isError: error,
    isLoading,
    isValidating,
  };

  interface DashScoreResponse {
    result: DashScore;
  }
}

export interface DashScore {
  score: number;
}