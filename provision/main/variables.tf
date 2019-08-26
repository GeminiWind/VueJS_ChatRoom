variable "aws_region" {
  description = "AWS region to launch servers."
  default     = "ap-southeast-2"
}

variable "app" {
  description = "Name of your app."
}

variable "stage" {
  description = "Stage where app should be deployed like dev, staging or prod."
  default     = "dev"
}

variable "root_domain" {
  description = "Your root domain."
}

variable "domain_name" {
  description = "Value of DNS record to construct your website URL"
}
