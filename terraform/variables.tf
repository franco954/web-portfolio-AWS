variable "project_name" {
  description = "Nombre del proyecto"
  type        = string
  default     = "portfolio-react"
}

variable "aws_region" {
  description = "Región de AWS"
  type        = string
  default     = "us-east-1"  # CloudFront requiere us-east-1 para certificados
}

variable "environment" {
  description = "Ambiente (dev, prod)"
  type        = string
  default     = "prod"
}