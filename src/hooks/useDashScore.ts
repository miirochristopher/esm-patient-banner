import { openmrsFetch, restBaseUrl } from "@openmrs/esm-framework";
import useSWR from "swr";

interface DashscoreData {
  results: number;
}

export function useDashscore(patientUuid: string) {

  const url = `${restBaseUrl}/outcomes/score/${patientUuid}`;

  const { data, error, isLoading, mutate } = useSWR<{ data: DashscoreData }, Error>(patientUuid ? url : null, openmrsFetch);

  return {
    data: data,
    isError: error,
    isLoading,
    mutate,
  };
}
