import { AgentAssignment as TAgentAssignment } from "../api/agentAssignment/AgentAssignment";

export const AGENTASSIGNMENT_TITLE_FIELD = "id";

export const AgentAssignmentTitle = (record: TAgentAssignment): string => {
  return record.id?.toString() || String(record.id);
};
