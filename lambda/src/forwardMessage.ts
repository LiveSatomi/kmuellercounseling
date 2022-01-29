import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import nodemailer from "nodemailer";

export const lambdaHandler = async (
    event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
    const queries = JSON.stringify(event);
    return {
        statusCode: 200,
        body: `Queries: ${queries}`,
    };
};
