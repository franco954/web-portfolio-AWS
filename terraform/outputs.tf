output "cloudfront_url" {
  description = "URL de CloudFront para acceder al sitio"
  value       = "https://${aws_cloudfront_distribution.portfolio.domain_name}"
}

output "cloudfront_distribution_id" {
  description = "ID de la distribución de CloudFront"
  value       = aws_cloudfront_distribution.portfolio.id
}

output "s3_bucket_name" {
  description = "Nombre del bucket S3"
  value       = aws_s3_bucket.portfolio.id
}

output "s3_bucket_arn" {
  description = "ARN del bucket S3"
  value       = aws_s3_bucket.portfolio.arn
}