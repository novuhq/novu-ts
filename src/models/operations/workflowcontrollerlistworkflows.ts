/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type WorkflowControllerListWorkflowsRequest = {
  page?: number | undefined;
  limit?: number | undefined;
  /**
   * A query string to filter the results. It allows filtering based on either the name or trigger identifier of the workflow items.
   */
  query?: string | undefined;
};

/** @internal */
export const WorkflowControllerListWorkflowsRequest$inboundSchema: z.ZodType<
  WorkflowControllerListWorkflowsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  page: z.number().optional(),
  limit: z.number().default(10),
  query: z.string().optional(),
});

/** @internal */
export type WorkflowControllerListWorkflowsRequest$Outbound = {
  page?: number | undefined;
  limit: number;
  query?: string | undefined;
};

/** @internal */
export const WorkflowControllerListWorkflowsRequest$outboundSchema: z.ZodType<
  WorkflowControllerListWorkflowsRequest$Outbound,
  z.ZodTypeDef,
  WorkflowControllerListWorkflowsRequest
> = z.object({
  page: z.number().optional(),
  limit: z.number().default(10),
  query: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WorkflowControllerListWorkflowsRequest$ {
  /** @deprecated use `WorkflowControllerListWorkflowsRequest$inboundSchema` instead. */
  export const inboundSchema =
    WorkflowControllerListWorkflowsRequest$inboundSchema;
  /** @deprecated use `WorkflowControllerListWorkflowsRequest$outboundSchema` instead. */
  export const outboundSchema =
    WorkflowControllerListWorkflowsRequest$outboundSchema;
  /** @deprecated use `WorkflowControllerListWorkflowsRequest$Outbound` instead. */
  export type Outbound = WorkflowControllerListWorkflowsRequest$Outbound;
}
